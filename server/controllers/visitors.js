const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const getVisitorsDashboard = async (req, res) => {
    try {
        const { startDate, endDate, bucket } = req.query;

        let whereClause = Prisma.empty;
        if (startDate && endDate) {
            whereClause = Prisma.sql`WHERE timestamp >= ${startDate} AND timestamp <= ${endDate}`;
        }

        const totalVisitorsResult = await prisma.$queryRaw`
            SELECT COUNT(id) as total FROM visitor_logs ${whereClause}
        `;
        const totalVisitors = Number(totalVisitorsResult[0].total);

        const visitorsByBucket = await prisma.$queryRaw`
            SELECT
                DATE(timestamp) as trend_date,
                COUNT(id) as visitors
            FROM
                visitor_logs
            ${whereClause}
            GROUP BY
                trend_date
            ORDER BY
                trend_date ASC
        `;

        const formattedVisitors = visitorsByBucket.map(data => ({
            startDate: data.trend_date.toISOString().split('T')[0],
            endDate: data.trend_date.toISOString().split('T')[0],
            visitors: Number(data.visitors),
        }));

        res.json({
            totalVisitors: totalVisitors,
            visitorsByBucket: formattedVisitors,
        });
    } catch (error) {
        console.error('Error fetching visitor data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getVisitorsDashboard };
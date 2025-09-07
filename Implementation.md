# Node.js E-commerce Case Study - Implementation

**Candidate Name:** BODAPATLA SUKUMAR

### Overview
This document outlines the implementation of the analytics features for the Node.js E-commerce Case Study. The core task was to add dashboards for tracking product trends and visitor traffic by creating new database tables and API endpoints.

### Database Schema Changes
Two new models were added to the `prisma/schema.prisma` file to create the necessary tables for analytics.

**Product Trends**
- **Table Name:** `product_trends`
- **Fields:**
  - `id`: Unique identifier, auto-incrementing.
  - `trend_date`: Date of the trend entry.
  - `total_products`: Total number of products at the time of the entry.
  - `products_added`: Number of products added on that day.
  - `products_removed`: Number of products removed on that day.

**Visitor Logs**
- **Table Name:** `visitor_logs`
- **Fields:**
  - `id`: Unique identifier, auto-incrementing.
  - `timestamp`: The date and time of the visitor's entry.

### API Endpoints

**1. Product Dashboard**
- **Endpoint:** `GET /api/products/dashboard/products`
- **Description:** This API returns the total count of all products and a historical trend of products added and removed over time. It can be filtered by a date range.
- **Query Parameters:**
  - `startDate`: (Optional) The start date for the data range (YYYY-MM-DD).
  - `endDate`: (Optional) The end date for the data range (YYYY-MM-DD).
- **Sample Response:** 
{
    "currentTotal": 0,
    "trend": [
        {
            "startDate": "2025-09-01",
            "endDate": "2025-09-01",
            "totalProducts": 105,
            "productsAdded": 5,
            "productsRemoved": 2
        },
        {
            "startDate": "2025-09-02",
            "endDate": "2025-09-02",
            "totalProducts": 108,
            "productsAdded": 3,
            "productsRemoved": 0
        },
        {
            "startDate": "2025-09-03",
            "endDate": "2025-09-03",
            "totalProducts": 110,
            "productsAdded": 4,
            "productsRemoved": 2
        },
        {
            "startDate": "2025-09-04",
            "endDate": "2025-09-04",
            "totalProducts": 112,
            "productsAdded": 2,
            "productsRemoved": 0
        }
    ]
}

**2. Visitors Dashboard**
- **Endpoint:** `GET /api/visitors/dashboard/visitors`
- **Description:** This API provides a total count of all visitors and a trend of visitor traffic grouped by a specific time bucket.
- **Query Parameters:**
  - `startDate`: (Optional) The start date for the data range (YYYY-MM-DD).
  - `endDate`: (Optional) The end date for the data range (YYYY-MM-DD).
- **Sample Response:** 
{
    "totalVisitors": 3,
    "visitorsByBucket": [
        {
            "startDate": "2025-09-06",
            "endDate": "2025-09-06",
            "visitors": 2
        },
        {
            "startDate": "2025-09-07",
            "endDate": "2025-09-07",
            "visitors": 1
        }
    ]
}

### Approach and Challenges
My approach was to use Prisma's ORM to manage the database schema and queries. I created new models and migrations to ensure the database was version-controlled. A key challenge was handling the database queries for aggregation, particularly with the visitors' log, which required using Prisma's `rawQuery` to perform group-by operations on date fields correctly for MySQL.


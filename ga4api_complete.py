import os

# 환경 변수 설정
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "C:/Users/CNXK/Downloads/gyutae-test-project-4867eb3aa1e5.json"

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    MetricType,
    RunReportRequest,
    RunRealtimeReportRequest,
)

def run_report(property_id="396939292"):
    """Runs a report of active users grouped by country."""
    client = BetaAnalyticsDataClient()

    request = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name="country")],
        metrics=[Metric(name="activeUsers")],
        date_ranges=[DateRange(start_date="2020-09-01", end_date="2020-09-15")],
    )
    response = client.run_report(request)
    print_run_report_response(response)


def print_run_report_response(response):
    """Prints results of a runReport call."""
    print(f"{response.row_count} rows received")
    for dimensionHeader in response.dimension_headers:
        print(f"Dimension header name: {dimensionHeader.name}")
    for metricHeader in response.metric_headers:
        metric_type = MetricType(metricHeader.type_).name
        print(f"Metric header name: {metricHeader.name} ({metric_type})")

    print("Report result:")
    for rowIdx, row in enumerate(response.rows):
        print(f"\nRow {rowIdx}")
        for i, dimension_value in enumerate(row.dimension_values):
            dimension_name = response.dimension_headers[i].name
            print(f"{dimension_name}: {dimension_value.value}")

        for i, metric_value in enumerate(row.metric_values):
            metric_name = response.metric_headers[i].name
            print(f"{metric_name}: {metric_value.value}")

# 그냥 보고서
def run_report_with_multiple_metrics(property_id="396939292"):
    """Runs a report of active users, new users and total revenue grouped by
    date dimension."""
    client = BetaAnalyticsDataClient()

    # Runs a report of active users grouped by three dimensions.
    request = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name="date")],
        metrics=[
            Metric(name="activeUsers"),
            Metric(name="newUsers"),
            Metric(name="totalRevenue"),
        ],
        date_ranges=[DateRange(start_date="7daysAgo", end_date="today")],
    )
    response = client.run_report(request)
    print_run_report_response(response)
    
    
# 실시간 보고서
def run_realtime_report_with_multiple_metrics(property_id="YOUR-GA4-PROPERTY-ID"):
    """Runs a realtime report on a Google Analytics 4 property."""
    client = BetaAnalyticsDataClient()

    request = RunRealtimeReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name="unifiedScreenName")],
        metrics=[Metric(name="screenPageViews"), Metric(name="conversions")],
    )
    response = client.run_realtime_report(request)
    print_run_report_response(response)
    
run_realtime_report_with_multiple_metrics(property_id="396939292")
run_report_with_multiple_metrics(property_id="396939292")
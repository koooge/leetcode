SELECT
  id,
  SUM(CASE WHEN month = 'jan' THEN revenue ELSE NULL END) AS Jan_Revenue,
  SUM(CASE WHEN month = 'feb' THEN revenue ELSE NULL END) AS Feb_Revenue,
  SUM(CASE WHEN month = 'mar' THEN revenue ELSE NULL END) AS Mar_Revenue,
  SUM(CASE WHEN month = 'apr' THEN revenue ELSE NULL END) AS Apr_Revenue,
  SUM(CASE WHEN month = 'may' THEN revenue ELSE NULL END) AS May_Revenue,
  SUM(CASE WHEN month = 'jun' THEN revenue ELSE NULL END) AS Jun_Revenue,
  SUM(CASE WHEN month = 'jul' THEN revenue ELSE NULL END) AS Jul_Revenue,
  SUM(CASE WHEN month = 'aug' THEN revenue ELSE NULL END) AS Aug_Revenue,
  SUM(CASE WHEN month = 'sep' THEN revenue ELSE NULL END) AS Sep_Revenue,
  SUM(CASE WHEN month = 'oct' THEN revenue ELSE NULL END) AS Oct_Revenue,
  SUM(CASE WHEN month = 'nov' THEN revenue ELSE NULL END) AS Nov_Revenue,
  SUM(CASE WHEN month = 'dec' THEN revenue ELSE NULL END) AS Dec_Revenue
FROM Department
GROUP BY id
ORDER BY id;

SELECT
  t1.Num ConsecutiveNums
FROM Logs t1
JOIN Logs t2 ON t1.Id = t2.Id - 1
JOIN Logs t3 ON t2.Id = t3.Id - 1
WHERE t1.Num = t2.Num AND t2.Num = t3.Num
GROUP BY t1.Num;

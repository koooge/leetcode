SELECT em1.Name Employee FROM Employee em1, Employee em2
WHERE em1.ManagerId = em2.Id AND em1.Salary > em2.Salary;

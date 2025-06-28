BEGIN
  FOR res IN (
    SELECT l.loanID
    FROM loans l
    JOIN customers c ON l.customerID = c.customerID
    WHERE TRUNC(MONTHS_BETWEEN(SYSDATE, c.dob) / 12) > 60
  ) LOOP
    UPDATE loans
    SET interestRate = interestRate - (interestRate * 0.01)
    WHERE loanID = res.loanID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('1% interest discount applied');

  COMMIT;
END;


BEGIN
  FOR res IN (
    SELECT c.name, c.customerID, l.loanID, l.enddate
    FROM loans l
    JOIN customers c ON l.customerID = c.customerID
    WHERE l.enddate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(
      res.name || ', your loan ' || res.loanID || ' is due on ' ||TO_CHAR(res.enddate, 'DD-Mon-YYYY')
    );
  END LOOP;
END;

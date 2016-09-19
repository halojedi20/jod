SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS BudgetItem;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE BudgetItem(
  budgetItemId INT AUTO_INCREMENT,
  budgetId INT NOT NULL,
  created DATETIME NOT NULL DEFAULT NOW(),
  description VARCHAR(300) NOT NULL,
  totalPrice DECIMAL(7, 2) NOT NULL,
  notes VARCHAR(500),
  PRIMARY KEY(budgetItemId),
  FOREIGN KEY(budgetId)
    REFERENCES Budget(budgetId)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE = INNODB DEFAULT CHARSET=utf8;
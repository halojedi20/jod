SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Budget;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE Budget(
  budgetId INT AUTO_INCREMENT,
  active TINYINT NOT NULL DEFAULT 1,
  accountId INT NOT NULL,
  budgetName VARCHAR(100) NOT NULL UNIQUE,
  created DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY(budgetId),
  FOREIGN KEY(accountId)
    REFERENCES Account(accountId)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE = INNODB DEFAULT CHARSET=utf8;
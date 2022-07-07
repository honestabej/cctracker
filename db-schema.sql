CREATE TABLE Users (
    userID VARCHAR(100),
    userName VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    PRIMARY KEY(userID)
);

CREATE TABLE Cards (
    cardID VARCHAR(100),
    cardName VARCHAR(100),
    cardType VARCHAR(100),
    PRIMARY KEY(cardID)
);

CREATE TABLE Credit (
    creditID VARCHAR(100),
    outstanding FLOAT,
    lineOfCredit FLOAT,
    PRIMARY KEY(creditID)
);

CREATE TABLE Debit (
    debitID VARCHAR(100),
    available FLOAT,
    PRIMARY KEY(debitID)
);

CREATE TABLE Budget (
    budgetID VARCHAR(100),
    amount FLOAT,
    days INT,
    PRIMARY KEY(budgetID)
);

CREATE TABLE Cycles (
    cycleID VARCHAR(100),
    balance VARCHAR(100),
    beginDate DATE,
    endDate DATE,
    PRIMARY KEY(cycleID)
);

CREATE TABLE Purchases (
    purchaseID VARCHAR(100),
    title VARCHAR(100),
    description VARCHAR(1000),
    amount FLOAT,
    date DATE,
    PRIMARY KEY(purchaseID)
);

CREATE TABLE UsBu (
    userID VARCHAR(100),
    budgetID VARCHAR(100),
    PRIMARY KEY(userID),
    FOREIGN KEY (userID) REFERENCES Users ON DELETE CASCADE,
    FOREIGN KEY (budgetID) REFERENCES Budget ON DELETE CASCADE
);

CREATE TABLE UsCa (
    userID VARCHAR(100),
    cardID VARCHAR(100),
    PRIMARY KEY(userID, cardID),
    FOREIGN KEY (userID) REFERENCES Users ON DELETE CASCADE,
    FOREIGN KEY (cardID) REFERENCES Cards ON DELETE CASCADE 
);

CREATE TABLE BuCy (
    budgetID VARCHAR(100),
    cycleID VARCHAR(100),
    PRIMARY KEY(budgetID, cycleID),
    FOREIGN KEY (budgetID) REFERENCES Budget ON DELETE CASCADE,
    FOREIGN KEY (cycleID) REFERENCES Cycles ON DELETE CASCADE
);

CREATE TABLE CyPu (
    cycleID VARCHAR(100),
    purchaseID VARCHAR(100),
    PRIMARY KEY(cycleID, purchaseID),
    FOREIGN KEY (cycleID) REFERENCES Cycles ON DELETE CASCADE,
    FOREIGN KEY (purchaseID) REFERENCES Purchases ON DELETE CASCADE
);

CREATE TABLE CaCr (
    cardID VARCHAR(100),
    creditID VARCHAR(100),
    PRIMARY KEY(cardID, creditID),
    FOREIGN KEY (cardID) REFERENCES Cards ON DELETE CASCADE,
    FOREIGN KEY (creditID) REFERENCES Credit ON DELETE CASCADE
);

CREATE TABLE CaDe (
    cardID VARCHAR(100),
    debitID VARCHAR(100),
    PRIMARY KEY(cardID, debitID),
    FOREIGN KEY (cardID) REFERENCES Cards ON DELETE CASCADE,
    FOREIGN KEY (debitID) REFERENCES Debit ON DELETE CASCADE
);

CREATE TABLE CrPu (
    creditID VARCHAR(100),
    purchaseID VARCHAR(100),
    PRIMARY KEY(creditID, purchaseID),
    FOREIGN KEY (creditID) REFERENCES Credit ON DELETE CASCADE,
    FOREIGN KEY (purchaseID) REFERENCES Purchases ON DELETE CASCADE
);

CREATE TABLE DePu (
    debitID VARCHAR(100),
    purchaseID VARCHAR(100),
    PRIMARY KEY(debitID, purchaseID),
    FOREIGN KEY (debitID) REFERENCES Debit ON DELETE CASCADE,
    FOREIGN KEY (purchaseID) REFERENCES Purchases ON DELETE CASCADE
);

INSERT INTO Users(userID, userName, email, password) VALUES 
    ('1', 'abe', 'abe@mail.com', 'testpwd'),
    ('2', 'shae', 'shae@mail.com', 'testpwd'),
    ('3', 'johnson', 'johnson@mail.com', 'testpwd');

INSERT INTO Cards(cardID, cardName, cardType) VALUES 
    ('11', 'abes debit', 'debit'),
    ('12', 'abes credit', 'credit'),
    ('13', 'shaes credit', 'credit'),
    ('14', 'johnsons debit', 'debit');

INSERT INTO Credit(creditID, outstanding, lineOfCredit) VALUES 
    ('21', '34.24', '2000.00'),
    ('22', '0.00', '3500.00');

INSERT INTO Debit(debitID, available) VALUES 
    ('31', '24.02'),
    ('32', '8124.08');

INSERT INTO Budget(budgetID, amount, days) VALUES 
    ('41', '425.00', '14'),
    ('42', '700.00', '16'),
    ('43', '110.00', '7');

INSERT INTO Cycles(cycleID, balance, beginDate, endDate) VALUES 
    ('51', '410.00', '2022-03-15', '2022-03-29'),
    ('52', '24.00', '2022-03-01', '2022-03-14'),
    ('53', '235.89', '2022-03-15', '2022-03-29'),
    ('54', '56.09', '2022-03-15', '2022-03-29');

INSERT INTO Purchases(purchaseID, title, description, amount, date) VALUES 
    ('61', 'p1', 'd1', '24.00', '2022-03-15'),
    ('62', 'p2', 'd2', '348.90', '2022-03-15'),
    ('63', 'p3', 'd3', '2.00', '2022-03-08'),
    ('64', 'p4', 'd4', '4.00', '2022-03-11'),
    ('65', 'p5', 'd5', '34.60', '2022-03-15'),
    ('66', 'p6', 'd6', '24.90', '2022-03-16');

INSERT INTO UsBu(userID, budgetID) VALUES 
    ('1', '41'),
    ('2', '42'),
    ('3', '43');

INSERT INTO UsCa(userID, cardID) VALUES 
    ('1', '11'),
    ('1', '12'),
    ('2', '13'),
    ('3', '14');

INSERT INTO BuCy(budgetID, cycleID) VALUES 
    ('41', '51'),
    ('41', '52'),
    ('42', '53'),
    ('43', '54');

INSERT INTO CaCr(cardID, creditID) VALUES 
    ('12', '21'),
    ('13', '22');

INSERT INTO CaDe(cardID, debitID) VALUES 
    ('11', '31'),
    ('14', '32');

INSERT INTO CrPu(creditID, purchaseID) VALUES 
    ('21', '61'),
    ('21', '64'),
    ('22', '66');

INSERT INTO DePu(debitID, purchaseID) VALUES 
    ('31', '62'),
    ('31', '63'),
    ('32', '65');

-- If DB reset is needed... ALL DATA WILL BE LOST --
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

-- Queries below --

-- Get username from userID
SELECT username FROM Users WHERE userid = $$$;

-- Post new userid, username, email, password to Users
INSERT INTO Users (userid, username, email, password) VALUES ($$$, $$$, $$$, $$$);

-- Get password from email
SELECT password FROM Users WHERE email = $$$;

-- Get userid from email/password
SELECT userid FROM Users WHERE (email = $$$ AND password = $$$);

-- Update email from userid
UPDATE Users SET email = $$$, WHERE userid = $$$;

-- Update password from userid
UPDATE Users SET password = $$$, WHERE userid = $$$;
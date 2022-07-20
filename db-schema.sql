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

INSERT INTO CyPu(cycleID, purchaseID) VALUES
    ('51', '61'),
    ('51', '62'),
    ('52', '63'),
    ('52', '64'),
    ('54', '65'),
    ('53', '66');

-- If DB reset is needed... ALL DATA WILL BE LOST --
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

-- Queries below --

-- Add new user
INSERT INTO Users (userID, userName, email, password) VALUES ('${user.userid}', '${user.username}', '${user.email}', '${hashedPwd}');

-- Get username from userID
SELECT userName FROM Users WHERE userID = '${user.userid}';

-- Get password from email
SELECT password FROM Users WHERE email = '${user.email}';

-- Get userid from email
SELECT userID FROM Users WHERE email = '${user.email}';

-- Update email from userid
UPDATE Users SET email = '${user.email}', WHERE userID = '${user.userid}';

-- Update password from userid
UPDATE Users SET password = '${hashedPwd}', WHERE userID = '${user.userid}';

-- Add debit card to userid
    -- Add debit card to Debit table
    INSERT INTO Debit(debitID, available) VALUES ('${user.debitid}', '${user.available}');

    -- Add card to Cards table
    INSERT INTO Cards(cardID, cardName, cardType) VALUES ('${user.cardid}', '${user.cardname}', 'debit');

    -- Add relationship to CaDe table
    INSERT INTO CaDe(cardID, debitID) VALUES ('${user.cardid}', '${user.debitid}');

    -- Add relationship to UsCa table
    INSERT INTO UsCa(userID, cardID) VALUES ('${user.userid}', '${user.cardid}');

-- Get all user's debit cards from userid
SELECT * FROM (SELECT * FROM (SELECT * FROM UsCa JOIN Cards using(cardID) WHERE userID = '${user.userid}') uc JOIN CaDe using(cardID)) ucd JOIN Debit using(debitID);

-- Delete a user's debit card from debitid
DELETE FROM Debit WHERE debitID = '${user.debitid}';

-- Add credit card to userid
    -- Add credit card to Credit table
    INSERT INTO Credit(creditID, outstanding, lineOfCredit) VALUES ('${user.creditid}', '${user.outstanding}', '${user.lineofcredit}');

    -- Add card to Cards table
    INSERT INTO Cards(cardID, cardName, cardType) VALUES ('${user.cardid}', '${user.cardname}', 'credit');

    -- Add relationship to CaCr table
    INSERT INTO CaCr(cardID, creditID) VALUES ('${user.cardid}', '${user.creditid}');

    -- Add relationship to UsCa table
    INSERT INTO UsCa(userID, cardID) VALUES ('${user.userid}', '${user.cardid}');

-- Get all user's credit cards from userid
SELECT * FROM (SELECT * FROM (SELECT * FROM UsCa JOIN Cards using(cardID) WHERE userID = '${user.userid}') uc JOIN CaCr using(cardID)) ucc JOIN Credit using(creditID);

-- Delete a user's credit card from creditid
DELETE FROM Credit WHERE creditID = '${user.creditid}';

-- Add a budget to userid
    -- Add budget to Budget table
    INSERT INTO Budget(budgetID, amount, days) VALUES ('${user.budgetid}', '${user.amount}', '${user.days}');

    -- Add relationship to UsBu table
    INSERT INTO UsBu(userID, budgetID) VALUES ('${user.userid}', '${user.budgetid}');

-- Get user's budget from userid
SELECT * FROM UsBu JOIN Budget using(budgetID) WHERE usbu.userid = '${user.userid}';

-- Update a budget from budgetid
    -- Get budgetid from userid
    SELECT budgetID FROM UsBu JOIN Budget using(budgetID) WHERE usbu.userID = '${user.userid}';

    -- Update amount
    UPDATE Budget SET amount = '${user.amount}' WHERE budgetID = '${user.budgetid}';

    -- Update days
    UPDATE Budget SET days = '${user.days}' WHERE budgetID = '${user.budgetid}';

    -- Update amount and days
    UPDATE Budget SET amount = '${user.amount}', days = '${user.days}' WHERE budgetID = '${user.budgetid}';

-- Delete a user's budget from budgetid
DELETE FROM Budget WHERE budgetID = '${user.budgetid}';

-- Add a new cycle to userid
    -- Add cycle to Cycles table
    INSERT INTO Cycles(cycleID, balance, beginDate, endDate) VALUES ('${user.cycleid}', '${user.balance}', '${user.beginDate}', '${user.endDate}');

    -- Get budgetid from userid (store in bid)
    SELECT budgetID FROM UsBu JOIN Budget using(budgetid) WHERE usbu.userid = '${user.userid}';

    -- Add relationship to BuCy table
    INSERT INTO BuCy(budgetID, cycleID) VALUES ('${bid}', '${user.cycleid}');

-- Get current cycle from userid (testing with date = 2022-03-20)
SELECT * FROM (SELECT * FROM (SELECT * FROM UsBu JOIN Budget using(budgetID) WHERE usbu.userID = '${user.userid}') ub JOIN BuCy using(budgetID)) ubc JOIN Cycles using (cycleID) WHERE '2022-03-20' BETWEEN Cycles.beginDate AND Cycles.endDate;

-- Add a new purchase
    -- Add purchase to Purchases table
    INSERT INTO Purchases(purchaseID, title, description, amount, date) VALUES ('${user.purchaseid}', '${user.title}', '${user.description}', '${user.amount}', '${user.date}');

    -- Add relationship to CyPu
    INSERT INTO CyPu(cycleID, purchaseID) VALUES ('${user.cycleid}', '${user.purchaseid}');

    -- Add relationship to DePu table
    INSERT INTO DePu(debitID, purchaseID) VALUES ('${user.debitid}', '${user.purchaseid}');

    -- OR --

    -- Add relationship to CrPu table
    INSERT INTO CrPu(creditID, purchaseID) VALUES ('${user.creditid}', '${user.purchaseid}');

-- Get purchases of current cycle from userid (testing with date = 2022-03-20)
SELECT * FROM (SELECT * FROM (SELECT cycleID FROM (SELECT * FROM (SELECT * FROM UsBu JOIN Budget using(budgetID) WHERE usbu.userid = '${user.userid}') ub JOIN BuCy using(budgetID)) ubc JOIN Cycles using (cycleID) WHERE '2022-03-20' BETWEEN Cycles.beginDate AND Cycles.endDate) cycle JOIN CyPu using(cycleID)) cp JOIN Purchases using(purchaseID);

-- Delete a purchase from purchaseid
DELETE FROM Purchases WHERE purchaseID = '${user.purchaseid}';


-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.

-- Users Table Create SQL
CREATE TABLE Users
(
    `id`       INT         NOT NULL AUTO_INCREMENT COMMENT 'id',
    `name`     VARCHAR(20) NOT NULL COMMENT 'name',
    `password` VARCHAR(20) NOT NULL COMMENT 'password',
    PRIMARY KEY (id)
);

ALTER TABLE Users
    COMMENT 'Users';


-- Users Table Create SQL
CREATE TABLE Rooms
(
    `id`         INT          NOT NULL AUTO_INCREMENT COMMENT 'id',
    `image`      VARCHAR(45)  NULL COMMENT 'image',
    `type`       INT          NOT NULL COMMENT 'type',
    `title`      VARCHAR(45)  NOT NULL COMMENT 'title',
    `location`   VARCHAR(100) NOT NULL COMMENT 'location',
    `price`      INT          NOT NULL COMMENT 'price',
    `capacity`   INT          NOT NULL COMMENT 'capacity',
    `showerRoom` INT          NOT NULL COMMENT 'showerRoom',
    `options`    INT          NOT NULL COMMENT 'options',
    `host`       INT          NOT NULL COMMENT 'host',
    PRIMARY KEY (id)
);

ALTER TABLE Rooms
    COMMENT 'Rooms';

ALTER TABLE Rooms
    ADD CONSTRAINT FK_Rooms_host_Users_id FOREIGN KEY (host)
        REFERENCES Users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- Users Table Create SQL
CREATE TABLE Reservations
(
    `id`       INT  NOT NULL AUTO_INCREMENT COMMENT 'id',
    `guest`    INT  NOT NULL COMMENT 'guest',
    `checkIn`  DATE NOT NULL COMMENT 'checkIn',
    `checkOut` DATE NOT NULL COMMENT 'checkOut',
    `roomId`   INT  NOT NULL COMMENT 'roomId',
    PRIMARY KEY (id)
);

ALTER TABLE Reservations
    COMMENT 'Reservatsions';

ALTER TABLE Reservations
    ADD CONSTRAINT FK_Reservations_guest_Users_id FOREIGN KEY (guest)
        REFERENCES Users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Reservations
    ADD CONSTRAINT FK_Reservations_roomId_Rooms_id FOREIGN KEY (roomId)
        REFERENCES Rooms (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- Users Table Create SQL
CREATE TABLE Options
(
    `id`   INT         NOT NULL AUTO_INCREMENT COMMENT 'id',
    `name` VARCHAR(20) NOT NULL COMMENT 'name',
    PRIMARY KEY (id)
);

ALTER TABLE Options
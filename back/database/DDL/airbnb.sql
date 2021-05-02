
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
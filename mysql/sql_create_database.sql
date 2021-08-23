-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema projetos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projetos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projetos` DEFAULT CHARACTER SET utf8 ;
USE `projetos` ;

-- -----------------------------------------------------
-- Table `projetos`.`ambito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`ambito` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ambito` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`tipo_financiamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`tipo_financiamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `financiamento` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`classificacao_projeto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`classificacao_projeto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `classificacao` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`tipo_captacao_recurso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`tipo_captacao_recurso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_captacao` CHAR(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`tipo_aditivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`tipo_aditivo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_aditivo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`projetos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`projetos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero_ano_registro` VARCHAR(16) NOT NULL,
  `projeto` VARCHAR(32) NOT NULL,
  `numero_funpec` VARCHAR(32) NULL,
  `titulo_projeto` VARCHAR(512) NOT NULL,
  `ambito_id` INT NOT NULL,
  `parceiro` VARCHAR(128) NOT NULL,
  `tipo_financiamento_id` INT NULL,
  `classificacao_projeto_id` INT NOT NULL,
  `tipo_captacao_recurso_id` INT NULL,
  `data_inicio` DATE NOT NULL,
  `data_fim` DATE NOT NULL,
  `status_id` INT NOT NULL,
  `valor` VARCHAR(32) NULL,
  `unidade_interessada` VARCHAR(64) NOT NULL,
  `nome_coordenador` VARCHAR(128) NULL,
  `unidade_academica_coordenador` VARCHAR(64) NULL,
  `docentes` INT NULL DEFAULT 0,
  `bolsista_graduacao` INT NULL DEFAULT 0,
  `bolsista_especialista` INT NULL DEFAULT 0,
  `bolsista_mestrado` INT NULL DEFAULT 0,
  `bolsista_doutorado` INT NULL DEFAULT 0,
  `especialista_convidado` INT NULL DEFAULT 0,
  `clt` INT NULL DEFAULT 0,
  `tecnico_ufrn` INT NULL DEFAULT 0,
  INDEX `fk_projetos_ambito_idx` (`ambito_id` ASC) VISIBLE,
  INDEX `fk_projetos_tipo-financiamento1_idx` (`tipo_financiamento_id` ASC) VISIBLE,
  INDEX `fk_projetos_classificacao-projeto1_idx` (`classificacao_projeto_id` ASC) VISIBLE,
  INDEX `fk_projetos_tipo-captacao-recurso1_idx` (`tipo_captacao_recurso_id` ASC) VISIBLE,
  INDEX `fk_projetos_status1_idx` (`status_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_projetos_ambito`
    FOREIGN KEY (`ambito_id`)
    REFERENCES `projetos`.`ambito` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_projetos_tipo-financiamento1`
    FOREIGN KEY (`tipo_financiamento_id`)
    REFERENCES `projetos`.`tipo_financiamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_projetos_classificacao-projeto1`
    FOREIGN KEY (`classificacao_projeto_id`)
    REFERENCES `projetos`.`classificacao_projeto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_projetos_tipo-captacao-recurso1`
    FOREIGN KEY (`tipo_captacao_recurso_id`)
    REFERENCES `projetos`.`tipo_captacao_recurso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_projetos_status1`
    FOREIGN KEY (`status_id`)
    REFERENCES `projetos`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`data-aditivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`data-aditivo` (
  `idtable1` INT NOT NULL,
  PRIMARY KEY (`idtable1`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos`.`aditivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos`.`aditivo` (
  `data_aditivo` DATE NOT NULL,
  `descricao` VARCHAR(128) NOT NULL,
  `projetos_id` INT NOT NULL,
  `tipo_aditivo_id` INT NOT NULL,
  INDEX `fk_aditivo_projetos1_idx` (`projetos_id` ASC) VISIBLE,
  CONSTRAINT `fk_aditivo_tipo_aditivo1`
    FOREIGN KEY (`tipo_aditivo_id`)
    REFERENCES `projetos`.`tipo_aditivo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aditivo_projetos1`
    FOREIGN KEY (`projetos_id`)
    REFERENCES `projetos`.`projetos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 19. Jan 2017 um 15:24
-- Server-Version: 10.1.19-MariaDB
-- PHP-Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `mme1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `citate`
--

CREATE TABLE `citate` (
  `id` int(11) NOT NULL,
  `citate` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `citate`
--

INSERT INTO `citate` (`id`, `citate`) VALUES
(1, 'Adventure is worthwhile.” – Aesop'),
(2, '“Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta'),
(3, '“We travel, some of us forever, to seek other places, other lives, other souls.” – Anais Nin'),
(4, '“A journey is best measured in friends, rather than miles.” – Tim Cahill'),
(5, ' “No place is ever as bad as they tell you it’s going to be.” – Chuck Thompson'),
(6, '“Travel makes one modest. You see what a tiny place you occupy in the world.” – Gustave Flaubert'),
(7, '“We travel not to escape life, but for life not to escape us.” – Anonymous '),
(8, '“The life you have led doesn’t need to be the only life you have.” – Anna Quindlen'),
(9, '“Man cannot discover new oceans unless he has the courage to lose sight of the shore.” – Andre Gide'),
(10, '“The world is a book, and those who do not travel read only one page.” – Saint Augustine');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mme1data`
--

CREATE TABLE `mme1data` (
  `id` int(11) NOT NULL,
  `usermail` varchar(40) NOT NULL,
  `city` varchar(40) NOT NULL,
  `country` varchar(40) NOT NULL,
  `from_date` date NOT NULL,
  `till_date` date NOT NULL,
  `notes` text NOT NULL,
  `username` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `mme1data`
--

INSERT INTO `mme1data` (`id`, `usermail`, `city`, `country`, `from_date`, `till_date`, `notes`, `username`) VALUES
(125, '', 'Berlin', '', '0000-00-00', '0000-00-00', '', 'Wadim');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `citate`
--
ALTER TABLE `citate`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `mme1data`
--
ALTER TABLE `mme1data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `citate`
--
ALTER TABLE `citate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT für Tabelle `mme1data`
--
ALTER TABLE `mme1data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

name := """Battleship in Scala for WebTech"""
//organization := "com.example"

version := "1.3"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.13.6"

libraryDependencies += guice
libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.9" % "test"
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.1.0" % Test

libraryDependencies += "com.h2database" % "h2" % "1.4.200"

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
//play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"

//libraryDependencies += "com.fasterxml.jackson.module" %% "jackson-module-scala" % "2.12.2"

//dependencyOverrides += "com.fasterxml.jackson.core" % "jackson-databind" % "2.11.4"
//dependencyOverrides += "com.fasterxml.jackson.core" % "jackson-core" % "2.11.4"

//libraryDependencies += "com.fasterxml.jackson.module" %% "jackson-module-scala" % "2.13.0"
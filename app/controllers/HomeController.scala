package controllers

import javax.inject._
import play.api._
import play.api.mvc._

import de.htwg.se.battleship.Battleship
import de.htwg.se.battleship.controller.controllerComponent.ControllerInterface

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {
  val gameController: ControllerInterface = Battleship.controller
  def battleshipAsText: String =  "Batlleship Game (console output)" + gameController.playgroundToString
  def message =  "Batlleship Game (console output)" + gameController.playgroundToString


  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
    //Ok(sudokuAsText)
  }

  def about: Action[AnyContent] = Action {
    Ok(views.html.about())
    // Ok("ABOUT TEXT")
  }

  def test: Action[AnyContent] = Action {
    Ok(views.html.test(gameController))
    // Ok("ABOUT TEXT")
  }

  def battleship: Action[AnyContent] = Action {
    Ok(views.html.battleship(gameController))
    // Ok("ABOUT TEXT")
  }

  def newBattlefiled: Action[AnyContent] = Action {
    gameController.createEmptyBattlefield(gameController.battlefieldSize)
    Ok(views.html.battleship(gameController))
  }

  def resize(size:Int): Action[AnyContent] = Action {
    gameController.resize(size)
    Ok(views.html.battleship(gameController))
  }
  def save: Action[AnyContent] = Action {
    gameController.save()
    Ok(views.html.battleship(gameController))
  }

  def load: Action[AnyContent] = Action {
    gameController.load()
    Ok(views.html.battleship(gameController))
  }

  def undo: Action[AnyContent] = Action {
    gameController.undo()
    Ok(views.html.battleship(gameController))
  }

  def redo: Action[AnyContent] = Action {
    gameController.redo()
    Ok(views.html.battleship(gameController))
  }

  def set(row:String, col:String): Action[AnyContent] = Action {
    gameController.set(row,col)
    Ok(views.html.battleship(gameController))
  }

}

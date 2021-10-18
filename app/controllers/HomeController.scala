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
  def sudokuAsText =  "testi"//gameController.createEmptyBattlefield(6)

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }

  def about: Action[AnyContent] = Action {
    Ok(views.html.index())
  }

  def sudoku: Action[AnyContent] = Action {
    Ok(sudokuAsText)
  }

}

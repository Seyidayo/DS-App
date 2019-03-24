"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
Route.on("/").render("welcome");
Route.group(() => {
  //Authentication and Registration
  Route.post("login", "AuthController.login");
  Route.post("register", "AuthController.register");
}).prefix("api");

Route.group(() => {
  //Admin
  Route.get("customers", "UserController.index");
  Route.delete("customers", "UserController.destroy");

  //Products
  Route.put("product/:id", "ProductController.update");
  Route.delete("product/id", "ProductController.destroy");
  Route.post("product", "ProductController.store");
  Route.get("product", "ProductController.index");

  //Orders
  Route.get("order", "OrderController.index");
  Route.post("order", "OrderController.store");
  Route.delete("order/:id", "OrderController.destroy");
})
  .prefix("api")
  // .middleware("auth");

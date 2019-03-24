"use strict";

const Order = use("App/Models/Order");
// const {validate} = use('Validator')
class OrderController {
  async index({ response, view }) {
    const orders = await Order.query()
      .with("user")
      .fetch();
    return response.json(orders);
  }

  async store({ request, response }) {
    //   const validation = await validate(request.all(), {
    //       title: 'required'
    //   })
    const order = new Order();
    Order.type = request.input("type");
    order.price = request.input("price");
    order.quantity = request.input("quantity");

    await order.save();
    return response.json(order);
  }

  async destroy ({ params, response}) {
      await Order.find(params.id).delete();
      return response.json({message: 'Order Deleted', success: true})
  }
}

module.exports = OrderController;

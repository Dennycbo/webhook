const mongoose = require("mongoose")
async function SaveUsers(email_user, plan_status, plan_key, date_payment){
    const PlanStatus = require("../models/PlansStatus")
    let userExist = await PlanStatus.findOne({email_user:email_user})
    let plansName = {"prorv677":"BlazeRoyaleR", "pro5ydyq":"BlazeRoyale", "pro7rwod":"MillionBlazeR", "proox1gw":"MillionBlazeVip", }
    if(userExist == null && plan_status == "Pagamento Aprovado"){
        await PlanStatus.create({email_user:email_user, plan_status:plan_status, plan_key:plan_key, date_payment:date_payment, plan_name:plansName[plan_key]})
    }else if(userExist != null && plan_status != "Pagamento Aprovado"){
        await PlanStatus.findOneAndUpdate({email_user:email_user}, {plan_status:plan_status})
    }
}
async function ConnectDb(){
    let user = "botTelegram"
    let password = "bottelegram2022"
    mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.e60ei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(()=>{
      console.log("Connected with sucess")
    }).catch((e)=>{
      console.log(e)
    })
}ConnectDb()
module.exports = {SaveUsers}

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."


// Copy and paste the following customer objects into a new index.js file.
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// Break your pseudocode into three smaller prompts.
// - Each of these small prompts should be addressed as an individual function.
// - Remember, a function should only do one task.
// - The returns of these functions should be stored in a variable, allowing other functions to use the result.
// Assign someone to be the driver for the current function.
// Expected Results:
//          Timmy => "Your grand total is $65"
//          Sarah => "Your grand total is $37.5."
//          Rocky => "Your grand total is $102.5"

function totalRefillPrice (pricePerRefill, refills) {
    return pricePerRefill * refills;
}

function withSubscription (refillTotal) {
    return refillTotal - (refillTotal * 0.25);
}

function withCoupon (refillWithSub, coupon) {
    if (coupon) {
        return refillWithSub - 10;
    } else {
        return refillWithSub;
    }
}

const timmyRefillTotal = totalRefillPrice(timmy.pricePerRefill, timmy.refills);
const timmySubTotal = timmy.subscription ? withSubscription(timmyRefillTotal) : timmyRefillTotal;
const timmyTotal = withCoupon(timmySubTotal, timmy.coupon);
const rockyRefillTotal = totalRefillPrice(rocky.pricePerRefill, rocky.refills);
const rockySubTotal = rocky.subscription ? withSubscription(rockyRefillTotal) : rockyRefillTotal;
const rockyTotal = withCoupon(rockySubTotal, rocky.coupon);
const sarahRefillTotal = totalRefillPrice(sarah.pricePerRefill, sarah.refills);
const sarahSubTotal = sarah.subscription ? withSubscription(sarahRefillTotal) : sarahRefillTotal;
const sarahTotal = withCoupon(sarahSubTotal, sarah.coupon);

console.log(`Timmy => "Your grand total is $${timmyTotal}".`);
console.log(`Sarah => "Your grand total is $${sarahTotal}".`);
console.log(`Rocky => "Your grand total is $${rockyTotal}".`);
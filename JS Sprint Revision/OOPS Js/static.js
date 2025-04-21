class MathUtil {
    static PI = 3.14;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

//* console.log(MathUtil.PI);
//* console.log(MathUtil.getDiameter(2));
//* console.log(MathUtil.getCircumference(2));
//* console.log(MathUtil.getArea(2));

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users.`);
    }
}

const user1 = new User("Archit");
const user2 = new User("Raghav");
User.getUserCount();
console.log(User.userCount);
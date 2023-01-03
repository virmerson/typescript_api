"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:in-memory-dao');
class UsersDao {
    constructor() {
        this.users = [];
        log('Created a new instance of UsersDao');
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.id = shortid_1.default.generate();
            this.users.push(user);
            return user.id;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((user) => { user.id === userId; });
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => { obj.id === userId; });
            this.users.splice(objIndex, 1, user);
            return `${user.id} updated via put`;
        });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => { obj.id === userId; });
            let currentUser = this.users[objIndex];
            let allowedFields = [
                'email',
                'password',
                'firstName',
                'lastName',
                'permissionLevel'
            ];
            for (let field of allowedFields) {
                if (field in user) {
                    // @ts-ignore
                    currentUser[field] = user[field];
                }
            }
            return `${userId} patched `;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1);
            return `${userId} removed`;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.email === email);
            let currentUser = this.users[objIndex];
            if (currentUser) {
                return currentUser;
            }
            else {
                return null;
            }
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvcy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJQSxzREFBOEI7QUFDOUIsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUUsbUJBQW1CLENBQUMsQ0FBQTtBQUV4RCxNQUFNLFFBQVE7SUFHVjtRQUZBLFVBQUssR0FBd0IsRUFBRSxDQUFBO1FBRzNCLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFSyxPQUFPLENBQUUsSUFBa0I7O1lBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDbEIsQ0FBQztLQUFBO0lBQ0ssUUFBUTs7WUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDckIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWE7O1lBQzNCLE9BQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFpQixFQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsRUFBRSxLQUFHLE1BQU0sQ0FBQSxDQUFBLENBQUMsQ0FBRyxDQUFBO1FBQ3ZFLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxNQUFhLEVBQUUsSUFBZTs7WUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUUsQ0FBQyxHQUFnQixFQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFHLE1BQU0sQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBO1lBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDcEMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLGtCQUFrQixDQUFBO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxNQUFhLEVBQUUsSUFBaUI7O1lBQzVDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFFLENBQUMsR0FBZSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFHLE1BQU0sQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRWhGLElBQUksV0FBVyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBRXBELElBQUksYUFBYSxHQUFHO2dCQUNoQixPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxVQUFVO2dCQUNWLGlCQUFpQjthQUNwQixDQUFBO1lBRUQsS0FBSyxJQUFJLEtBQUssSUFBSSxhQUFhLEVBQUM7Z0JBQzVCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtvQkFDZixhQUFhO29CQUNiLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQ3BDO2FBQ0o7WUFFRCxPQUFPLEdBQUcsTUFBTSxXQUFXLENBQUE7UUFDbkMsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLE1BQWM7O1lBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNqQyxDQUFDLEdBQW1CLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUM3QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sR0FBRyxNQUFNLFVBQVUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsS0FBYTs7WUFDOUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pDLENBQUMsR0FBc0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQ2xELENBQUM7WUFDRixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksV0FBVyxFQUFFO2dCQUNiLE9BQU8sV0FBVyxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQUVELGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUMifQ==
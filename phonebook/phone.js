var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var PhoneType;
(function (PhoneType) {
    PhoneType["Home"] = "home";
    PhoneType["Office"] = "office";
    PhoneType["Studio"] = "studio";
})(PhoneType || (PhoneType = {}));
//API
function fetchContact() {
    const contacts = [
        {
            name: 'John Doe',
            address: '123 Main St',
            phones: {
                home: { num: 1234567890 },
            },
        },
        {
            name: 'Sally',
            address: '456 Elm St',
            phones: {
                office: { num: 9876543210 },
            },
        }
    ];
    return new Promise(resolve => {
        setTimeout(() => resolve(contacts), 2000);
    });
}
//main
class AddressBook {
    constructor() {
        this.contacts = [];
        this.fetchData();
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.contacts = yield fetchContact();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    findContactByName(name) {
        return this.contacts.filter((contact) => contact.name === name);
    }
    findContactByAddress(address) {
        return this.contacts.filter((contact) => contact.address === address);
    }
    findContactByPhone(phoneNumber, phoneType) {
        return this.contacts.filter((contact) => contact.phones[phoneType].num === phoneNumber);
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    displayListByName() {
        return this.contacts.map(contact => contact.name);
    }
    displayListByAddress() {
        return this.contacts.map(contact => contact.address);
    }
}
// 메인 코드 수정
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let addressBook = new AddressBook();
        // contacts가 로드될 때까지 기다립니다.
        yield addressBook.fetchData();
        let byName = addressBook.findContactByName("Sally");
        console.log(byName);
    });
}
// main 함수 실행
main().catch(console.error);

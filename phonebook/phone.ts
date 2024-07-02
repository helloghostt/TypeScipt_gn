interface PhoneNumberDictionary {
    [phone:string]: {
        num: number;
    }
}

interface Contact {
    name: string;
    address: string;
    phones:PhoneNumberDictionary;
}

enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio',
}

//API
function fetchContact(): Promise<Contact[]> {
    const contacts:Contact[] = [
        {
            name: 'John Doe',
            address: '123 Main St',
            phones: {
                home: {num: 1234567890 },
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
    contacts: Contact[] = [];

    constructor() {
        this.fetchData();
    }

    async fetchData(): Promise<void> {
        try {
            this.contacts = await fetchContact();
        } catch (error) {
            console.error(error);
        }
    }
    findContactByName(name:string):Contact[]{
        return this.contacts.filter((contact) => contact.name === name);
    }
    findContactByAddress(address:string):Contact[]{
        return this.contacts.filter((contact) => contact.address === address);
    }
    findContactByPhone(phoneNumber:number, phoneType:PhoneType):Contact[]{
        return this.contacts.filter((contact) => contact. phones[phoneType].num===phoneNumber);
    }
    addContact(contact:Contact):void {
        this.contacts.push(contact);
    }

    displayListByName():string[] {
        return this.contacts.map(contact => contact.name);
    }
    displayListByAddress():string[] {
        return this.contacts.map(contact => contact.address);
    }    
}

// 메인 코드 수정
async function main() {
    let addressBook = new AddressBook();
    
    // contacts가 로드될 때까지 기다립니다.
    await addressBook.fetchData();

    let byName: Contact[] = addressBook.findContactByName("Sally");
    console.log(byName);
}

// main 함수 실행
main().catch(console.error);

// tsc .\phone.ts --target ES6
// node .\phone.js



// Output
// [
//     {
//       name: 'Sally',
//       address: '456 Elm St',
//       phones: { office: [Object] }
//     }
//   ]
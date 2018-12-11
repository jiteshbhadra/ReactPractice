
const newspapers =[
    {name:"Times of India",publishYear:1950},
    {name:"Kutchmitra",publishYear:1950},
    {name:"Gujarat Samachar",publishYear:1950},
    {name:"Mumbai Samachar",publishYear:1950}
];
class NewspaperService{
    static getNewsPaperList()
    {
        return new Promise((resolve,reject)=>
        {
            resolve(newspapers);
        });
    }
    static addNewspaper(newspaper)
    {
        return new Promise((resolve,reject)=>{
            newspapers.push(newspaper);
            resolve(newspaper);
        }
        );
    }
    static getNewspaperByName(name){
        return new Promise((resolve,reject)=>{
            const newspaper = newspapers.filter(n=>n.name === name);
            if(newspaper && newspaper.length >0){
                resolve(newspaper[0]);
            }
            else
            {
                reject("Cannot found");
            }

        });
    }
}
export default NewspaperService;
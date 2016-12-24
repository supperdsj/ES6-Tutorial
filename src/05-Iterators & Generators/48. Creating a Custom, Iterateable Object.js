/**
 * Created by dongsj on 2016/12/24.
 */
let person = {
    name: 'dongsj',
    hobbies:['sleeping','eating'],
    [Symbol.iterator]: function () {
        let i=0;
        let hobbies=this.hobbies;
        return {
            next:function(){
                let value=hobbies[i];
                i++;
                return {
                    done:i>hobbies.length,
                    value:value
                };
            }
        };
    }
};
for (let hobby of person){
    console.log(hobby);
}
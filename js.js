/*
1.建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。
 fibonacci(0) // 0
 fibonacci(1) // 1
 fibonacci(2) // 1
 fibonacci(3) // 2
 fibonacci(4) // 3 
*/
 
index [0,1,2,3,4,5,6,7,8,9]
array [0,1,1,2,3,5,8]
let position = 5

let input = prompt()

function Fibonacci(position){ 
    let array = [0, 1];
    for(let i = 2; i <= position; i++){
        array[i] = array[i-1] + array[i-2]
    }    
    return array[position]
}
document.write(Fibonacci(input))

/*
2.使用 Linked List 實作 Stack ，實作需包含以下方法。
 push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。 
				
const stack = new Stack() 
stack.push(1)
stack.push(2) 
stack.push(3) 
stack.pop() // 3 
stack.size() // 2 
*/

// 創建節點
class Node {
    constructor(val){ //假設val = '1'
        this.val = val; //節點內的值 Node{val: '1'}
        this.next = null;//下一個還不知道 Node{val:'1', next: null}
    }
}

// 創建liskedList
class LinkedList {
    constructor(){ 
        this.head = null; //LinkedList{head: null}
        this.tail = null; //LinkedList{head: null, tail: null}
        this.length = 0; 
    }
    // 新增新的一個Node 到 list最後
    push(val){
        let newNode = new Node(val); //接收新node (假設 Node{val:'1', next: null})
        if(!this.head){ //當list內 沒有head的話 
            this.head = newNode; //就把剛剛接收到的新node 指向head 當作list開頭head 
            /*
            LinkedList{
                head: Node{val:'1', next: null}, 
                tail: null}
            */
            this.tail = this.head;//並把剛剛新增的node(head) 指向list尾巴tail  
            /* 
            LinkedList{
                head: Node{val:'1', next: null}, 
                tail: Node{val:'1', next: null}}
            */

        }else{ //如果list內 已經有head的話 
            /*
            LinkedList{
                head: Node{val:'1', next: null},
                tail: Node{val:'1', next: null}
            {
            加入  Node{val:'2', next: null}
            */
            this.tail.next = newNode;
            /*
            LinkedList{
                head: Node{val:'1', next: Node{val:'2', next: null}},
                tail: Node{val:'1', next: Node{val:'2', next: null}}
            {
            */
            this.tail = newNode; 
            /*
             LinkedList{
                head: Node{val:'1', next: Node{val:'2', next: null}},
                tail: Node{val:'2', next: null}
            {
            */
        }
        this.length++; //再把list的長度+1
        return this //再把整個list回傳
    }
    // 刪除list最後一個node節點
    pop(){
        if (this.length === 0) return undefined
        let currentNode = this.head;
        let newTail = currentNode;
        while (currentNode.next) {
          newTail = currentNode;
          currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return currentNode;
      }
    // 查看list有幾個
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
          arr.push(current.val);
          current = current.next;
        }
        console.log(arr);
      }

}

let list = new LinkedList();
console.log(list.push('1'))
console.log(list.push('2'))
// console.log(list.push('3'))

console.log(list.print())
console.log(list.length)



/*
3.將下列輸入資料整合成期望的輸出結果。*/
// 輸入資料:

// const userIds = ['U01', 'U02', 'U03'] 
// const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' } 

// // const orderIds = ['T01', 'T02', 'T03', 'T04'] 
// const userOrders = [			
// { userId: 'U01', orderIds: ['T01', 'T02'] },
//  	{ userId: 'U02', orderIds: [] },
//  	{ userId: 'U03', orderIds: ['T03'] },
// ]



// // 輸出結果:
// const result = [
//     {user: { id: 'U01', name: 'Tom' }, orders: [{ id: 'T01', name: 'A', price: 499 },{ id: 'T02', name: 'B', price: 599 }]},
//     {user: { id: 'U02', name: 'Sam' }, orders: []},
//     {user: { id: 'U03', name: 'John' }, orders: {id: 'T03', name: 'C', price: 699}}
// ]

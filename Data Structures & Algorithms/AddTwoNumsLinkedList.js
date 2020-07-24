function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Create Test Link Lists
const l1 = new ListNode(5);

l1.next = new ListNode(4);

l1.next.next = new ListNode(3);

const l2 = new ListNode(5);

l2.next = new ListNode(6);

l2.next.next = new ListNode(4);



var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0); //Note dummy head used to initialize linked list
    curr = dummyHead;
    var carry = 0;
    while(l1!=null || l2 != null){
        var x = ( l1 !=null )? l1.val:0;
        var y = ( l2 != null )? l2.val:0;
        var sum = x + y + carry;
        //Must Get the integer quotient.  Floor makes the number whole and rounds down
        var  carry = Math.floor(sum / 10) // get carry

        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1 !=  null) {l1 = l1.next;}
        if (l2 != null) {l2 = l2.next;}
    }
    if (carry > 0){
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};

console.log(addTwoNumbers(l1,l2));

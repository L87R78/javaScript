/*
let f = (function () {
	let list = [];
	return {
		add:function (element) {
			list.push(element);
			this.size++;
			list = list.sort((a,b)=>a-b)
			
		},
		remove:function (index) {
			if(index>=0&&index<=list.length-1){
				list.splice(index,1);
				
				this.size--;
			}
			
		},
		get:function (index) {
			if(index>=0&&index<=list.length-1){
				return Number(list.filter((e,i)=>i===index))
			}
		},
		size:0
	}
})();
f.add(5);
f.add(3);
f.remove(0);
console.log(f.get(0));
*/


function solve() {
	return {
		list: [],
		size: 0,
		add: function (element) {
			this.list.push(element);
			this.size++;
			this.list.sort((a,b)=> a - b);
		},
		remove: function (index) {
			if(index >= 0 && index < this.list.length){
				this.list.splice(index, 1);
				this.size--;//
			}
		},
		get: function (index) {
			if(index >= 0 && index < this.list.length){
				return this.list[index];
				
			}
		},
		
	}
}

let sortedList = solve();

console.log('start size :' + sortedList.size);
sortedList.add(1);
sortedList.add(2);
sortedList.add(3);
sortedList.add(4);
sortedList.add(5);

console.log(sortedList.list.toString());
sortedList.remove(1);
console.log('Sorted list :' + sortedList.list.toString());
console.log('Get index :' + sortedList.get(0));
console.log('End size :' + sortedList.size);
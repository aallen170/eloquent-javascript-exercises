let arr = ['a', 'j', 'k', 'e', 'f', 'i', 'j', 'x', 'q', 'z', 'w', 'o', 'b', 'a', 'd', 'l'];

let pivot = arr.length / 2, p1 = 0, p2 = arr.length - 1, tmp;

while (p1 <= p2) {
  while (arr[p1] < pivot) {
    p1++;
  }

  while (arr[p2] > pivot) {
    p2--;
  }

  if (p1 <= p2) {
    tmp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = tmp;
    p1++;
    p2--;
  }
}
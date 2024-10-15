// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 
// 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

function solution (array, height) {
    return array.filter(h => h > height).length;
}

function solution(array, height) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) {
            answer++
        }
    }
    return answer;
}

// array.length 만큼 반복문을 돌리고 array[i]를 통해 배열안의 값들이 머쓱이의 키보다 클때만 위에 선언한 변수 answer값에 ++을 통해 값을 증가시켜 
// 머쓱이보다 키가 큰 사람의 개수를 계산하는 방식으로 했네
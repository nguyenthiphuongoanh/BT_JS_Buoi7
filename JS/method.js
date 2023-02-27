
// Hàm kiểm tra số chẵn
function checkSoChan(n) {
    //flag = 1 => số lẻ 
    //flag = 0 => số chẵn

    var flag = 1;
    if (n % 2 == 0) flag = 0;
    return flag;
}

// Hàm tìm số chẵn cuối cùng
function timSoChanCuoiCung(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (checkSoChan(array[i]) == 0) return array[i];
    }
    return 0;
}

//Hàm tìm số nguyên tố
function kiemTraSoNguyenTo(number) {
    // flag = 0 => không phải số nguyên tố
    // flag = 1 => số nguyên tố
    var flag = 1;
    if (number < 2) return flag = 0;


    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            flag = 0;
            break;
        }
    }
    return flag;
}

// Hàm kiểm tra số nguyên dương
function soNguyenDuong(n) {
    // flag = 1 => số nguyên dương
    // flag = 0 => không phải số nguyên dương

    var flag = 0;
    var i = 0;
    while (i <= n) {
        if (n > 0 && n % 1 == 0) {
            flag = 1;
            break;
        }
        i++;
    }
    return flag;
}
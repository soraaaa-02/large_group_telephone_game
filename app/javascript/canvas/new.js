console.log("canvas_new");
// モード（描く/消しゴム）
var mode = "1";
// 描き込みタイプ（ペン）
var inputType = "1";

// 色・透過度
var canvasRgba = "rgba(0, 0, 0, 1)";
// 太さ
var brushSize = 10;

// クリックホールドフラグ
var holdClick = false;

// 開始座標(X)
var startX = 0;
// 開始座標(Y)
var startY = 0;

// 各種canvasオブジェクト
var imageCvs = document.getElementById("imageCanvas");
var imageCtx = imageCvs.getContext("2d");

var drawCvs = document.getElementById("drawCanvas");
var drawCtx = drawCvs.getContext("2d");

var pointerCvs = document.getElementById("pointerCanvas");
var pointerCtx = pointerCvs.getContext("2d");

window.addEventListener("load", function (e) {

    // マウスクリックイベント
    pointerCvs.addEventListener("mousedown", mouseDown);
    // マウス移動イベント
    pointerCvs.addEventListener("mousemove", mouseMove);
    // マウスクリック外しイベント
    pointerCvs.addEventListener("mouseup", mouseUp);
    // エリアから外れたときのイベント
    pointerCvs.addEventListener("mouseout", function (e) {
        // ポインター除去
        pointerCtx.clearRect(0, 0, imageCvs.width, imageCvs.height)
        // マウスクリック外しイベントを呼び出し
        if (holdClick) {
            mouseUp(e);
        }
    });

});

// モード変更時
window.addEventListener('DOMContentLoaded', function() {
    $('[name="mode"]').on('change', function (e) {
        mode = $('input[name="mode"]:checked').val();

        if (mode == "1") {
            // 描く
            $("#input-type-area").show();
            $("#size-area").show();
            $("#transparent-area").show();
            $("#range-area").show();
            $("#color-picker-area").show();
        } else if (mode == "2") {
            // 消しゴム
            $("#input-type-area").hide();
            $("#size-area").show();
            $("#transparent-area").hide();
            $("#range-area").show();
            $("#color-picker-area").hide();
        }
    });
});

// 描き込みタイプ変更時
window.addEventListener('DOMContentLoaded', function() {
    $('[name="input-type"]').on('change', function (e) {
        inputType = $('input[name="input-type"]:checked').val();
    });
});

// 色変更時
window.addEventListener('DOMContentLoaded', function() {
    $('#colorPicker').on('change', function (e) {

        // colorPicker値設定
        $(this).val(e.detail[0]);

        // canvas用にcanvasRgba形式へ変換
        canvasRgba = "rgba(" +
            parseInt(e.detail[0].substring(1, 3), 16) + ", " +
            parseInt(e.detail[0].substring(3, 5), 16) + ", " +
            parseInt(e.detail[0].substring(5, 7), 16) + ", 1)";
    });
});

// 「ファイルを選択」ボタン
window.addEventListener('DOMContentLoaded', function() {
    $('#uploadFile').on('change', function (e) {

        var file = e.target.files[0];

        if (file.type.indexOf("image") < 0) {
            alert("画像ファイルを指定してください。");
            return false;
        }

        var reader = new FileReader();
        reader.onload = (function (file) {
            return function (e) {
                image(e.target.result);
                $("#explanation").hide();
            };
        })(file);
        reader.readAsDataURL(file);
    });
});

// 太さ変更時
function sizeChange(num) {
    document.getElementById("size").innerHTML = num;
    brushSize = num;
}

// マウスクリックイベント
function mouseDown(e) {
    holdClick = true;
    // クリック開始座標を保持
    startX = e.offsetX;
    startY = e.offsetY;
}

// マウス移動イベント
function mouseMove(e) {

    // 座標表示
    document.getElementById("dispX").innerHTML = e.offsetX;
    document.getElementById("dispY").innerHTML = e.offsetY;

    if (mode == "1") { // モード：描く

        if (inputType == "1") { // 描き込みタイプ：ペン
            pointer(e);
        }

        if (holdClick) {
            if (inputType == "1") { // 描き込みタイプ：ペン
                drawPen(e);
            }
        }

    } else if (mode == "2") { // モード：消しゴム

        pointer(e);

        if (holdClick) {
            drawErase(e);
        }

    }
}

// マウスクリック外しイベント
function mouseUp(e) {

    holdClick = false;

    if (mode == "1") { // モード：描く
        if (inputType == "1") { // 描き込みタイプ：ペン
            drawPen(e);
        }
    } else if (mode == "2") { // モード：消しゴム
        drawErase(e);
    }
}

// drawCanvasエリア描画(ペン)
function drawPen(e) {

    drawCtx.lineWidth = brushSize;
    drawCtx.strokeStyle = canvasRgba;
    drawCtx.lineJoin = "round";
    drawCtx.lineCap = "round";
    drawCtx.globalCompositeOperation = 'source-over';
    drawCtx.beginPath();
    drawCtx.moveTo(startX, startY); // 開始座標（前回座標）
    drawCtx.lineTo(e.offsetX, e.offsetY); // 終了座標（現在座標）
    drawCtx.stroke(); // 描画
    drawCtx.closePath();

    // 次の描画に向けて現在の座標を保持（開始・終了を同じ座標で描画すると、マウスを高速に移動したときに歯抜け状態になる）
    startX = e.offsetX;
    startY = e.offsetY;
}

// drawCanvasエリア描画(消しゴム)
function drawErase(e) {

    drawCtx.lineWidth = brushSize;
    drawCtx.lineCap = "round"; // 先端の形状
    drawCtx.strokeStyle = "rgba(255, 255, 255, 1)"; // 色はなんでもよいが、透過度は1にする
    drawCtx.globalCompositeOperation = 'destination-out' // 塗りつぶした個所を透明化
    drawCtx.beginPath();
    drawCtx.moveTo(startX, startY); // 開始座標（前回座標）
    drawCtx.lineTo(e.offsetX, e.offsetY); // 終了座標（現在座標）
    drawCtx.stroke(); // 描画
    drawCtx.closePath();

    // 次の描画に向けて現在の座標を保持（開始座標・終了座標を同じ座標にしてしまうと、マウスを高速に移動したときに歯抜け状態になる）
    startX = e.offsetX;
    startY = e.offsetY;
}

// pointerCanvasエリア描画
function pointer(e) {

    // 事前のポインタ描画を除去
    pointerCtx.clearRect(0, 0, imageCvs.width, imageCvs.height)

    if (mode == "2") {
        // モード：消しゴムのときは白固定
        pointerCtx.strokeStyle = "rgba(255, 255, 255, 1)";
    } else {
        pointerCtx.strokeStyle = canvasRgba; // 事前に設定していた色
    }

    pointerCtx.lineWidth = brushSize; // 太さ
    pointerCtx.lineCap = "round"; // 円

    pointerCtx.beginPath();
    pointerCtx.moveTo(e.offsetX, e.offsetY);
    pointerCtx.lineTo(e.offsetX, e.offsetY); // 開始座標と終了座標を同じ
    pointerCtx.stroke(); // 描画
    pointerCtx.closePath();
}

// imageCanvasエリア画像設定
function image(src) {

    var img = new Image();
    img.src = src;
    img.onload = () => {
        // canvasエリアと画像のスケールを計算（縦・横 スケール値が低い方を採用）
        var scale =
            Math.min(
                $('#canvas-area').width() / img.naturalWidth,
                $('#canvas-area').height() / img.naturalHeight);

        // canvasエリアの高さ・幅を設定
        imageCvs.width = img.width * scale;
        imageCvs.height = img.height * scale;

        drawCvs.width = imageCvs.width;
        drawCvs.height = imageCvs.height;

        pointerCvs.width = imageCvs.width;
        pointerCvs.height = imageCvs.height;

        // 画像を縮小して設定
        imageCtx.drawImage(img, 0, 0, imageCvs.width, imageCvs.height);
    };
}
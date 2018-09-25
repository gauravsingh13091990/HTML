urlPopular = "https://api.themoviedb.org/3/movie/popular?api_key=2bb74c45bf95c8cdde8d1bb002d40d6f&language=en-US&page=1";
data = [{}];
var xmlhttp1 = new XMLHttpRequest();

var buttonforward, buttonprevious;

xmlhttp1.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        data[0] = JSON.parse(this.responseText);
        document.querySelector('.movieImage').setAttribute("src", "https://image.tmdb.org/t/p/w500" +
            data[0].results[0].poster_path);
        document.querySelector('.voteAvg').textContent = "Vote-Avg :" + data[0].results[0].vote_average;
        document.querySelector('.title').textContent = "movie-title :" + data[0].results[0].title;
        document.querySelector('.date').textContent = "movie-date :" + data[0].results[0].release_date;
        document.querySelector('.overview').textContent = "Overview :" + data[0].results[0].overview;

        url = 'https://api.themoviedb.org/3/movie/' + data[0].results[0].id + '/videos?api_key=2bb74c45bf95c8cdde8d1bb002d40d6f&language=en-US';
        var xmlhttp = new XMLHttpRequest();
        vidurl = {};
        xmlhttp.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                vidurl = JSON.parse(this.responseText);
                var trailerIndex = vidurl.results.length - 1;
                document.querySelector('.player').setAttribute("src", "");
                if(trailerIndex>=0){
                    document.querySelector('.player').setAttribute("src", "https://www.youtube.com/embed/" + vidurl.results[trailerIndex].key);
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        buttonforward = function name(a) {
            a.value++;
            document.querySelector('.buttonPrev').style.display = "inline";
            document.querySelector('.buttonPrev').setAttribute("value", a.value);
            if (a.value == data[0].results.length - 1) {
                a.style.display = "none";
            }
            document.querySelector('.movieImage').setAttribute("src", "https://image.tmdb.org/t/p/w500" +
                data[0].results[a.value].poster_path);

            document.querySelector('.voteAvg').textContent = "Vote-Avg :" + data[0].results[a.value].vote_average;
            document.querySelector('.title').textContent = "movie-title :" + data[0].results[a.value].title;
            document.querySelector('.date').textContent = "movie-date :" + data[0].results[a.value].release_date;
            document.querySelector('.overview').textContent = "Overview :" + data[0].results[a.value].overview;
            url = 'https://api.themoviedb.org/3/movie/' + data[0].results[a.value].id + '/videos?api_key=2bb74c45bf95c8cdde8d1bb002d40d6f&language=en-US';
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }

        buttonprevious = function name(a) {
            a.value--;
            document.querySelector('.buttonNext').style.display = "inline";
            document.querySelector('.buttonNext').setAttribute("value", a.value);
            if (a.value == 0) {
                a.style.display = "none";
            }
            document.querySelector('.movieImage').setAttribute("src", "https://image.tmdb.org/t/p/w500" +
                data[0].results[a.value].poster_path);

            document.querySelector('.voteAvg').textContent = "Vote-Avg :" + data[0].results[a.value].vote_average;
            document.querySelector('.title').textContent = "movie-title :" + data[0].results[a.value].title;
            document.querySelector('.date').textContent = "movie-date :" + data[0].results[a.value].release_date;
            document.querySelector('.overview').textContent = "Overview :" + data[0].results[a.value].overview;
            url = 'https://api.themoviedb.org/3/movie/' + data[0].results[a.value].id + '/videos?api_key=2bb74c45bf95c8cdde8d1bb002d40d6f&language=en-US';
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }
    }
};
xmlhttp1.open("GET", urlPopular, true);
xmlhttp1.send();
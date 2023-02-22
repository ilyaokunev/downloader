const buttonForTakeLinks = document.getElementsByClassName('get-links-button')[0];
const inputWithLink = document.getElementsByClassName('dowload-input')[0];

const audioLinkRef = document.getElementsByClassName('audio-link')[0];
const videoLinkRef = document.getElementsByClassName('video-link')[0];

const audioIframe = document.getElementsByTagName('iframe')[0];
const videoIframe = document.getElementsByTagName('iframe')[1];


let videoLinkForDownload;
let audioLinkForDownload;

buttonForTakeLinks.addEventListener('click', () => {
  const value = inputWithLink.value;
  if (value !== '') {
    parseLink(inputWithLink.value);
    setIframes();
  } else {
    errorForNoLink();
  }
})

errorForNoLink = function() {
  window.alert('Дурашка, ты ссылку забыла');
}

parseLink = function(link) {
  const splittedLink = link.split('/sep/');

  const baseLink = splittedLink[0] + '/parcel/';

  const firstVideoId = splittedLink[1].split(',')[0];
  const firstAudioId = splittedLink[1].split('/audio/')[1].split(',')[0];

  videoLinkForDownload = baseLink + firstVideoId + '.mp4';
  audioLinkForDownload = baseLink + 'audio/' + firstAudioId + '.mp4';

}

setIframes = function() {

  audioIframe.setAttribute('src', audioLinkForDownload);
  videoIframe.setAttribute('src', videoLinkForDownload);

}


document.addEventListener("DOMContentLoaded", () => {
  const headContent = `
  <title>A. Parness | Home</title>

<link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
<df-messenger
  project-id="portfolioai-447818"
  agent-id="d0a7ab7b-25b4-4e41-bc38-dfec2409bc38"
  language-code="en"
  max-query-length="-1">
  <df-messenger-chat-bubble
   chat-title="Ask me about Amy">
  </df-messenger-chat-bubble>
</df-messenger>
<style>
  df-messenger {
    z-index: 999;
    position: fixed;
    --df-messenger-font-color: #000;
    --df-messenger-font-family: Google Sans;
    --df-messenger-font-family: Inter Var;
    --df-messenger-chat-background: #f3f6fc;
    --df-messenger-message-user-background: #d3e3fd;
    --df-messenger-message-bot-background: #fff;
    --df-messenger-chat-bubble-icon-color: #fff;
    --df-messenger-chat-bubble-background: #88bfcf;
    bottom: 16px;
    right: 16px;
  }

.animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-right{position:-300px;opacity: 0;animation:animateright 0.4s forwards;animation-delay: 150ms;}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.animate-left-1{position:relative;opacity: 0;animation:animateleft-1 0.4s forwards;animation-delay: 300ms;}@keyframes animateleft-1{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-right-1{position:-300px;opacity: 0;animation:animateright-1 0.4s forwards;animation-delay: 450ms;}@keyframes animateright-1{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.animate-left-2{position:relative;opacity:0;animation:animateleft-2 0.4s forwards;animation-delay: 600ms}@keyframes animateleft-2{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-right-2{position:-300px;opacity: 0;animation:animateright-2 0.4s forwards;animation-delay: 750ms;}@keyframes animateright-2{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.animate-left-3{position:relative;opacity:0;animation:animateleft-3 0.4s forwards;animation-delay: 900ms}@keyframes animateleft-3{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.animate-right-3{position:-300px;opacity: 0;animation:animateright-3 0.4s forwards;animation-delay: 1050ms;}@keyframes animateright-3{from{right:-300px;opacity:0} to{right:0;opacity:1}}

.animate-opacity{opacity:0;animation:opac 0.8s forwards}@keyframes opac{from{opacity:0} to{opacity:1}}

html{scroll-behavior: smooth;}

img {
  position: relative;
  transform: translateY(0px);
  transition: 1s all ease;
}
img.active {
  transform: translateY(0);
  opacity: 1;
}
.reveal {
  opacity: 0;
}

</style>
  `;

  document.head.innerHTML = document.head.innerHTML + headContent;
});

let color = '#3aa757';


// ///////////////////////
// // onInstalled event //
// ///////////////////////
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);

//   var parent = chrome.contextMenus.create({
//     "id": "right-test-1",
//     "title": "右击菜单测试",
//   });

//   chrome.contextMenus.create({
//     "id": "right-test-11",
//     "parentId": parent,
//     "title": '右击子菜单测试',
//   });
// });

// //////////////////////////////////
// // contextMenu onClick Listener //
// //////////////////////////////////
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   console.log(info);
//   console.log(tab);
// });

// ///////////////////////
// // 接收界面按钮的请求 //
// ///////////////////////
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log(request)
//   console.log(sender)
//   console.log(sendResponse)
// });

// ///////////////////////
// // /监听页面网络请求 //
// ///////////////////////
// chrome.webRequest.onBeforeRequest.addListener(details => {
//   console.log(details);
// });




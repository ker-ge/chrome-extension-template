let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  var parent = chrome.contextMenus.create({
    "id": "right-test-1",
    "title": "右击菜单测试"
  });

  chrome.contextMenus.create({
    "id": "right-test-11",
    "parentId": parent,
    "title": '右击子菜单测试',
  });
});

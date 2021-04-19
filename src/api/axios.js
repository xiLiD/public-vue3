import { requestGet, requestPost, requestFile, requestExcel, urlGetRequest } from "@/api/request";
import url from "./url";
import base from "@/api/baseUrl";
console.log(url)
function getParams(params) {
  let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
  return Object.assign(
    {},
    {
      url: baseUrl + "/node" + params.url,
      data: params.data,
      showLoading: params.showLoading,
      timeOut: params.timeOut,
      loadingTime: params.loadingTime,
      isLoading: params.isLoading
    }
  );
}
// const getToken = function (params = {}) {
//   params.url = url.getToken;
//   return requestPost(getParams(params));
// };
const getData = function (params = {}) {
  console.log(params)
  params.url = url.getStatus;
  console.log(params)
  return urlGetRequest(getParams(params));
};
const getStatus = function (params = {}) {
  params.url = url.getStatus;
  console.log(params)
  return requestGet(getParams(params));
};

const getNodeData = function (params = {}) {
  console.log(url)
  params.url = url.getNodeData;
  console.log(params)
  return requestGet(getParams(params));
};

const getNode = function (params = {}) {
  params.url = url.getNode;
  return requestPost(getParams(params));
};
const getGroup = function (params = {}) {
  params.url = url.getGroup;
  return requestPost(getParams(params));
};
const getReport = function (params = {}) {
  params.url = url.getReport;
  return requestPost(getParams(params));
};

export default {
  getNode,
  getGroup,
  getStatus,
  getNodeData,
  getData,
  getReport
};

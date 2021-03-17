import { ServerResponse } from "http";
import { NextApiHandler } from "next";

/**
 * Perform a server side redirect
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 * https://nodejs.org/api/http.html#http_class_http_serverresponse
 */
const serverSideRedirect = (
  res: ServerResponse,
  destinationPath: string,
  statusCode = 301
) => {
  res.writeHead(statusCode, { Location: destinationPath });
};

const handler: NextApiHandler = (req, res) => {
  res.clearPreviewData();
  serverSideRedirect(res, req.headers.referer || "/", 307);
  res.end();
};

export default handler;

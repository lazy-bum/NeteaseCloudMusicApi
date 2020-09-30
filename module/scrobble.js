// 听歌打卡

module.exports = (query, request) => {
  const json = []
  if (query.json) {
    query.json.forEach((ele) => {
      json.push[
        {
          download: 0,
          end: 'playend',
          id: ele.id,
          sourceId: ele.sourceid,
          time: ele.time || 240,
          type: 'song',
          wifi: 0,
        }
      ]
    })
  } else {
    json.push({
      download: 0,
      end: 'playend',
      id: query.id,
      sourceId: query.sourceid,
      time: query.time,
      type: 'song',
      wifi: 0,
    })
  }
  const data = {
    logs: JSON.stringify([
      {
        action: 'play',
        json,
      },
    ]),
  }

  return request('POST', `https://music.163.com/weapi/feedback/weblog`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}

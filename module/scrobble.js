// 听歌打卡

module.exports = (query, request) => {
  const logs = []
  if (query.logs) {
    query.logs.forEach((ele) => {
      logs.push({
        action: 'play',
        json: {
          download: 0,
          end: 'playend',
          id: ele.id,
          sourceId: ele.sourceId,
          time: ele.time || 240,
          type: 'song',
          wifi: 0,
        },
      })
    })
  } else {
    logs.push({
      action: 'play',
      json: {
        download: 0,
        end: 'playend',
        id: query.id,
        sourceId: query.sourceid,
        time: query.time,
        type: 'song',
        wifi: 0,
      },
    })
  }

  const data = {
    logs: JSON.stringify(logs),
  }

  return request('POST', `https://music.163.com/weapi/feedback/weblog`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}

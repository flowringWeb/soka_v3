import request from '@/utils/request'

export function getMemberList () {
  return request({
    url: '/member/list',
    method:'get'
  })
}
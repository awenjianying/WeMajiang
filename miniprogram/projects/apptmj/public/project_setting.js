module.exports = { //apptmj
	PROJECT_COLOR: '#3E2AD1',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#3E2AD1',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' }, 
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	NEWS_NAME: '通知公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftpic' }, 
	],
	NEWS_FIELDS: [

	],

	MEET_NAME: '预约',
	MEET_CATE: [
		{ id: 1, title: '麻将桌预约', style: 'leftbig1' },
		{ id: 2, title: '棋牌桌预约', style: 'leftbig1' }, 
	],
	MEET_CAN_NULL_TIME: false, // 是否允许有无时段的日期保存和展示
	MEET_FIELDS: [ 
		{ mark: 'desc', title: '简介', type: 'textarea', max: 60, must: true },
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true }, 
		{ mark: 'content', title: '详情', type: 'content', must: true },
	],

	MEET_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
	],

	// 时间默认设置
	MEET_NEW_NODE:
	{
		mark: 'mark-no', start: '10:00', end: '10:59', limit: 20, isLimit: true, status: 1,
		stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
	},
	MEET_NEW_NODE_DAY: [
		{
			mark: 'mark-am', start: '09:00', end: '11:59', limit: 20, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		},
		{
			mark: 'mark-pm', start: '14:00', end: '18:59', limit: 20, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		}
		,
		{
			mark: 'mark-pm', start: '19:00', end: '23:59', limit: 20, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		}
	], 


}
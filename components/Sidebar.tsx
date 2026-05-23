'use client'

export default function Sidebar() {
  return (
    <aside className="w-72 h-full bg-white border-r border-zinc-200 flex flex-col">
      {/* 헤더 */}
      <div className="p-4 border-b border-zinc-200">
        <h1 className="text-lg font-semibold text-zinc-900">SiteSync</h1>
        <p className="text-sm text-zinc-500 mt-1">위치 기반 자산 관리</p>
      </div>

      {/* 추가 버튼 */}
      <div className="p-4 border-b border-zinc-200">
        <button className="w-full py-2 px-4 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-700 transition-colors">
          + 새 위치 추가
        </button>
      </div>

      {/* 필터 */}
      <div className="p-4 border-b border-zinc-200 flex gap-2">
        <button className="px-3 py-1 text-xs rounded-full bg-zinc-900 text-white">전체</button>
        <button className="px-3 py-1 text-xs rounded-full border border-zinc-200 text-zinc-600">진행중</button>
        <button className="px-3 py-1 text-xs rounded-full border border-zinc-200 text-zinc-600">대기</button>
        <button className="px-3 py-1 text-xs rounded-full border border-zinc-200 text-zinc-600">완료</button>
      </div>

      {/* 목록 */}
      <div className="flex-1 overflow-y-auto">
        <p className="text-sm text-zinc-400 text-center mt-8">아직 등록된 위치가 없어요</p>
      </div>

      {/* 하단 통계 */}
      <div className="p-4 border-t border-zinc-200 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-lg font-semibold text-zinc-900">0</p>
          <p className="text-xs text-zinc-500">전체</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-green-600">0</p>
          <p className="text-xs text-zinc-500">진행중</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-zinc-400">0</p>
          <p className="text-xs text-zinc-500">완료</p>
        </div>
      </div>
    </aside>
  )
}
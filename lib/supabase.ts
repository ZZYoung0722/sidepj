import { createClient } from '@supabase/supabase-js'


/*
Supabase 클라이언트 초기화 코드
supabase.ts는 연결 설정만 하는 파일
실제 DB작업은 다른 파일에서 import해서 사용
-> 조회, 등록, 수정, 삭제
*/
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
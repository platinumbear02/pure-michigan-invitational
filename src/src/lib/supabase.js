import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kcupcunwiwbjjxbsjzop.supabase.co'
const supabaseAnonKey = 'sb_publishable_OqdvBvAopdgPhc_0RAGoLw_6ixDScgC'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

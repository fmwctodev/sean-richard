import MarqueeStrip from '@/components/editorial/MarqueeStrip';
import { AUTHORITY_TAGS } from '@/content/services';

export default function AuthorityStrip() {
  return <MarqueeStrip items={AUTHORITY_TAGS} />;
}

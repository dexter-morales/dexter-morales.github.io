import { useCallback, useState } from 'react';
import type { ToastItem, ToastType } from '../components/ui/Toast';

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback((type: ToastType, message: string) => {
    const id = `${type}-${Date.now()}`;
    setToasts((prev) => [...prev, { id, type, message }]);
    return id;
  }, []);

  const success = useCallback(
    (message: string) => show('success', message),
    [show],
  );

  const error = useCallback(
    (message: string) => show('error', message),
    [show],
  );

  return { toasts, dismiss, success, error };
}

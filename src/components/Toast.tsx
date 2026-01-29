import { useState, useCallback, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle, Info, ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';

// Types
type ToastType = 'success' | 'error' | 'info' | 'cart';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
}

interface ToastContextValue {
    toasts: Toast[];
    addToast: (message: string, type?: ToastType, duration?: number) => void;
    removeToast: (id: string) => void;
}

// Context
const ToastContext = createContext<ToastContextValue | null>(null);

// Hook
export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

// Provider Component
export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((message: string, type: ToastType = 'success', duration = 3000) => {
        const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

        setToasts((prev) => [...prev, { id, message, type, duration }]);

        // Auto-remove after duration
        if (duration > 0) {
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== id));
            }, duration);
        }
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
}

// Toast Icons
const TOAST_ICONS = {
    success: Check,
    error: AlertCircle,
    info: Info,
    cart: ShoppingCart,
} as const;

const TOAST_STYLES = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    cart: 'bg-gradient-to-r from-primary-400 to-primary-500',
} as const;

// Toast Container Component
function ToastContainer({
    toasts,
    removeToast
}: {
    toasts: Toast[];
    removeToast: (id: string) => void;
}) {
    return (
        <div className="fixed bottom-20 md:bottom-4 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 pointer-events-none">
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
                ))}
            </AnimatePresence>
        </div>
    );
}

// Individual Toast Component
function ToastItem({
    toast,
    onRemove
}: {
    toast: Toast;
    onRemove: (id: string) => void;
}) {
    const Icon = TOAST_ICONS[toast.type];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                opacity: { duration: 0.2 }
            }}
            className={cn(
                'pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-float text-white min-w-[280px] max-w-[90vw]',
                TOAST_STYLES[toast.type]
            )}
        >
            <div className="flex-shrink-0 p-1 bg-white/20 rounded-full">
                <Icon className="w-4 h-4" />
            </div>
            <span className="flex-1 text-sm font-medium">{toast.message}</span>
            <button
                onClick={() => onRemove(toast.id)}
                className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Dismiss"
            >
                <X className="w-4 h-4" />
            </button>
        </motion.div>
    );
}
